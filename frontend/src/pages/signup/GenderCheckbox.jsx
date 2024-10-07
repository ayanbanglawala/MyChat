const GenderCheckbox = ({ onCheckboxChange, selectGender }) => {
    return (
      <div className='flex'>
        <div className="form-control">
          <label className={`label cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
            <span className="label-text mx-2">Male</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={selectGender === "male"}
              onChange={() => { onCheckboxChange("male") }}
            />
          </label>
        </div>
        <div className="form-control">
          <label className={`label cursor-pointer ${selectGender === "female" ? "selected" : ""}`}>
            <span className="label-text mx-2">Female</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={selectGender === "female"}
              onChange={() => { onCheckboxChange("female") }}
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckbox;
  