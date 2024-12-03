import PropTypes from "prop-types";

export default function SectionWrapper(props) {
  const { children, header, title, id } = props;

  
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]} <span className="uppercase text-blue-400">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
}

// Define prop types for SectionWrapper
SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Expecting children to be a valid React node
  header: PropTypes.string.isRequired, // Expecting header to be a string
  title: PropTypes.array.isRequired, // Expecting title to be an array of strings
  id: PropTypes.string.isRequired, // Expecting id to be a string (optional)
}
