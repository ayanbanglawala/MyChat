import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

// Send a message between two users
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { userid: receiverId } = req.params; // Get receiverId from params
    const senderId = req.user._id;

    // Check if a conversation exists between sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If no conversation exists, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create a new message and add to conversation
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);
    await conversation.save(); // Save the conversation

    await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}
    // Return the newly created message
    res.status(201).json({ newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get messages for a particular conversation
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; // Extract userToChatId from params
    const senderId = req.user._id; // Get senderId from the authenticated user

    // Find conversation between the two users
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]); // Return empty array if no conversation
    }

    const messages = conversation.messages;
    res.status(200).json(messages); // Return the messages
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
