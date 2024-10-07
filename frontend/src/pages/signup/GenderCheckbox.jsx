const GenderCheckbox = () => {
    return (
        <div className='flex'>
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text mx-2">Male</span>
                    <input type="checkbox"  class="checkbox" />
                </label>
            </div>
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text mx-2">Female</span>
                    <input type="checkbox" class="checkbox" />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;