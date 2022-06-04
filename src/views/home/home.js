
import FbImageLibrary from 'react-fb-image-grid'
import './home.css';

export default function home(prop) {
    
    return (
        <div>
          
            <div className="post">
                
                <div > 
                        <div className="head">
                            <img src={prop.avatar} alt="" /> 
                            <h1 className='name' > {prop.name} </h1>  
                            <h4 className="time"  > {prop.time} </h4>
                        </div>
                
                
                    <h3 className='diss' >{prop.discription}</h3>
                </div>
                <FbImageLibrary images={ prop.image }/>
                 <div className="footer" >  <h1 className="fon" > <img className="inIm" src="https://cdn-icons-png.flaticon.com/512/633/633759.png" alt="" /> Like</h1>  <h1 className="fon" > <img className="inIm" src="https://cdn-icons.flaticon.com/png/512/3318/premium/3318523.png?token=exp=1642621645~hmac=fc10e8c937ced2ed801b1c413dbc0b50" alt="" /> Comment</h1>  <h1 className="fon" > <img className="inIm" src="https://cdn-icons-png.flaticon.com/512/1059/1059106.png" alt="" /> Share</h1> </div>
            </div>
            
        </div>
        
    )
}
