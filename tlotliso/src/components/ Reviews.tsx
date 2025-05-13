






  
  export type reviews=string[];

  export interface ReviewsProps{
    reviewItems:reviews;
}





export const Reviews:React.FC<ReviewsProps>=({reviewItems})=>(
    <>
    <div className="my-[4rem]">

    {reviewItems.map((item, index) => (
        <p key={index}
        className="reviews__container p-2  text-left border border-gray-900 my-2 rounded-lg"
        >{item}</p>
      ))}

    </div>
    
    </>
)