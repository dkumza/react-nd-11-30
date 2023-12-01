/* eslint-disable react/prop-types */
export const Item = ({ newBorderRadius, newNumber }) => {
   return (
      <>
         <div className="item" style={{ borderRadius: newBorderRadius }}>
            <p>{newNumber}</p>
         </div>
      </>
   );
};
