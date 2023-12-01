/* eslint-disable react/prop-types */
export const Item = ({ newBorderRadius, item }) => {
   return (
      <>
         <div className="item" style={{ borderRadius: newBorderRadius }}>
            {item.map((i, index) => (
               <div key={index} className={i}>
                  {" "}
               </div>
            ))}
            {/* <p className={item}></p> */}
         </div>
      </>
   );
};
