import React from 'react'
import logo from './sample.jpg';
export const About = () => {
    return (
        <div>
             <center><h3 className={'about-text'}>
             There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour,
               or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there isn't anything embarrassing hidden in the middle of text.
                 <br></br>
                 <center><img src={logo} alt="Girl in a jacket" width={"300"} height={"400"}></img></center>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                   predefined chunks as necessary, making this the first true generator
                    on the Internet. It uses a dictionary of over 200 Latin words,
                     combined with a handful of model sentence structures,
                      to generate Lorem Ipsum which looks reasonable.
                       The generated Lorem Ipsum is therefore always free from repetition,
                        injected humour, or non-characteristic words etc.
                 </h3></center>
            
                 

        </div>
    )
}
