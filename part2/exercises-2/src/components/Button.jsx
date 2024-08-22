import './styles.css';

function Button() {
   let onLearnMore = () => {
      alert("Slipsh Splash");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;