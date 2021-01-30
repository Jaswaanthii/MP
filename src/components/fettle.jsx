import React,{Component} from 'react';
//import './css/example.css';
import 'semantic-ui-css/semantic.min.css';
import './fettle.css'


class Fettle extends Component{
  state = {
    value : "None",
    value2 : "None",
    value3 : "None",
    value4 : "None"

  };
  
  
  onChange = e =>{
    this.setState({[e.target.name] : e.target.value})
  }
 

  render(){
    
    const{value,value2,value3,value4} = this.state;
    return(

      <form>
      <b><font color="black" size="1" face="verdana">
      <br></br><h1><center>Fill up this shorty quiz</center></h1><br></br>
      <center>
      <div class="ui raised segment">
      
      Do you listen to music in foreign languages? :{value}</div>
        <h1 className="increaseFontSize">
        <label>
        
          <center>Yes I prefer international
          <input type="radio"
                 value="Yes"
                 name="value"
                 checked={value==="Yes"}
                 onChange={this.onChange}/></center>
    

        </label>
        
        <label>
          <center>No I prefer regional
          <input type="radio"
                 value="No"
                 name="value"
                 checked={value==="No"}
                 onChange={this.onChange}/></center>

        </label>
        </h1>
        <br/>
        
        
        <br/>

        <div class="ui raised segment">
        <center>
        Do you like light music or not? : {value2}</center></div>
        <h1 className="increaseFontSize">
        <label>
        Yes I like
          <input type="radio"
                 value="Yes i do"
                 name="value2"
                 checked={value2==="Yes i do"}
                 onChange={this.onChange}/>

        </label>
        <br/>
        <label>
        No I don't
          <input type="radio"
                 value="No I don't"
                 name="value2"
                 checked={value2==="No I don't"}
                 onChange={this.onChange}/>

        </label>
        </h1></center>
        <br/>
        
       
        
        <br/>
        <center>
        <div class="ui raised segment">
        <center>
        Are you drawn towards the lyrics or the beat ? : {value3}</center></div>
        <h1 className="increaseFontSize">
        <label>
          I focus on lyrics
          <input type="radio"
                 value="I concentrate on lyrics"
                 name="value3"
                 checked={value3==="I concentrate on lyrics"}
                 onChange={this.onChange}/>

        </label>
        <br/>
        <label>
          I listen to the beat
          <input type="radio"
                 value="I listen to the beat"
                 name="value3"
                 checked={value3==="I listen to the beat"}
                 onChange={this.onChange}/>

        </label>
        </h1></center>
        <br/>
        
        <br/>
       <center> 
       <div class="ui raised segment">
       <center>
       Can you concentrate on other things when you are listening to music? : {value4}</center></div>
       <h1 className="increaseFontSize">
        <label>
          Yes, I can
          <input type="radio"
                 value="Yes, I can"
                 name="value4"
                 checked={value4==="Yes, I can"}
                 onChange={this.onChange}/>

        </label>
        <br/>
        <label>
          No, I completely focus on the music
          <input type="radio"
                 value="No, I completely focus on the music"
                 name="value4"
                 checked={value4==="No, I completely focus on the music"}
                 onChange={this.onChange}/>
        </label>
        </h1></center>
        <br/>
        <br/>
      </font>
      </b> 
      </form>
    
    
    
      
    )
  }
}

export default Fettle;
