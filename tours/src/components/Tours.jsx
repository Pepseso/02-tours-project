import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <div className='container'>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} />;
      })}
    </div>
  );
};
export default Tours;
