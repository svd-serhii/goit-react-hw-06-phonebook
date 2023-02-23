import Form from '../Form';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <Form />
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.wrap}>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};

export default App;
