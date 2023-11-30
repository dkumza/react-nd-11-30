export const Item = ({ newBorderRadius, random }) => {
   return (
      <>
         <div className="item" style={{ borderRadius: newBorderRadius }}>
            <p>{random}</p>
         </div>
      </>
   );
};
