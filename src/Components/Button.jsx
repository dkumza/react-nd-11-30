/* eslint-disable react/prop-types */
export const Button = ({ handleClick, buttonText, btnClass }) => {
   return (
      <button onClick={handleClick} className={btnClass}>
         {buttonText}
      </button>
   );
};
