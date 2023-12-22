const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 text-center mx-auto my-10">
      <p className="text-yellow-600 py-4">---{subHeading}---</p>
      <h3 className="text-3xl font-medium border-y-4 uppercase py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
