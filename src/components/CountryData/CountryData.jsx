const CountryData = ({ country }) => {
  return (
    <div>
      <p>
        <small>Country data: {country?.name?.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
