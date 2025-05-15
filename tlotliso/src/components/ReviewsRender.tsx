import type { reviews} from "./ Reviews";
import {Reviews} from "./ Reviews";

export const reviewItems: reviews= [
    "Honestly, I bought this on a whim during a midnight online shopping spree, and I was fully prepared to regret everything in the morning. But surprise, surprise—it actually works like a charm! It’s like the product knew I didn’t have the energy for disappointment. Super easy to use, looks great, and hasn’t exploded yet. 10/10 would panic-buy again.",
    
    "You know when you get something new and expect it to just kind of work but then it totally overachieves and makes you feel like you have your life together? That’s what this thing did. It made me feel like a tech-savvy genius even though I once tried to toast bread in a microwave. It's that good. And the instructions weren’t written in ancient riddle form, so that’s a win too.",
    
    "I was skeptical. I’m always skeptical. I don’t trust things that sound too good. But here I am, weeks later, telling everyone I know—including my dog—about how amazing this is. I’ve become that person. The one who raves about a product like it cured my existential dread. Okay, it didn’t, but it definitely helped with my Monday mood.",
    
    "Not to be dramatic, but this might be the best thing I’ve bought all year—and yes, that includes the pizza blanket. It’s reliable, sleek, and somehow makes me feel like I’ve got my act together, which is a miracle in itself. My only complaint is that it didn’t come with a certificate saying, 'Congrats, you made a good decision for once!'"
  ];

  export const ReviewsRender =()=>(

    <Reviews reviewItems={reviewItems}/>

  )