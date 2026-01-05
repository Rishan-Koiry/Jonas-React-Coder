import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      {country.countryCode ? (
        <img
          src={`https://flagcdn.com/48x36/${country.countryCode.toLowerCase()}.png`}
          alt={`Flag of ${country.country}`}
        />
      ) : (
        <span>{country.emoji}</span>
      )}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
