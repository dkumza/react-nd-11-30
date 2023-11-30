export const Button = ({ handleChange, handleRandom }) => {
   return (
      <>
         <button onClick={() => handleChange()} className="btn">
            change
         </button>
         <button onClick={() => handleRandom()} className="btn red">
            random
         </button>
      </>
   );
};
