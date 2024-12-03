import PropTypes from "prop-types";

export default function Button(props) {
  const { text, func } = props;

   Button.propTypes = {
     func: PropTypes.func.isRequired, 
     text: PropTypes.string.isRequired,
   };

  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-md border bg-slate-950 border-blue-400 border-solid blueShadow duration-300"
    >
      <p>{text}</p>
    </button>
  );
}
