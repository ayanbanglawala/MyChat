import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { userid: receiverId } = req.params; // Correct parameter extraction
    const senderId = req.user._id;

    // Check if a conversation already exists between sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    // If no conversation exists, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    }

    // Create a new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    });

    // Push the message ID to the conversation's messages array and save
    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await conversation.save(); // Save the updated conversation
    }

    // Return success response
    res.status(201).json({newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMessage = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id; 

        const conversation = await  Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages

        res.status(200).json(messages);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}