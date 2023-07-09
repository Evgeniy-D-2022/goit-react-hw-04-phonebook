import React, { useState } from "react";
import css from './Form.module.css';

const Form =({ creatContact }) => {
 const [name, setName] = useState('');
 const [number, setNumber] = useState('');
 

  const addContact = e => {
    e.preventDefault();

    creatContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch(name) {
      case 'name': setName(value);
      break;
      case 'number': setNumber(value);
      break;
      default: {
        console.log('There is no such input like that');
      }
    }
   
  };

  return (
        <>
         <form className={css.form} onSubmit={addContact}>
        <label className={css.form__label}>Name
        <input
        className={css.form__input}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        pattern='^[a-zA-Zа-яА-ЯёЁ][a-zA-Z-а-яА-ЯёЁ ]+[a-zA-Zа-яА-ЯёЁ]?$'
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        onChange={handleChange}
        value={name}
        />
        <input
        className={css.form__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="phone number xxx-xx-xx"
        onChange={handleChange}
        value={number}
        />
        </label>
        <button className={css.form__btn} type="submit">Add Contact</button>
      </form>
        </>
    )
  }




// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   }

//   addContact = e => {
//     e.preventDefault();
//     this.props.creatContact(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//         <>
//          <form className={css.form} onSubmit={this.addContact}>
//         <label className={css.form__label} htmlFor="">Name
//         <input
//         className={css.form__input}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         placeholder="Name"
//         onChange={this.handleChange}
//         value={this.state.name}
//         />
//         <input
//         className={css.form__input}
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         placeholder="phone number xxx-xx-xx"
//         onChange={this.handleChange}
//         value={this.state.number}
//         />
//         </label>
//         <button className={css.form__btn} type="submit">Add Contact</button>
//       </form>
//         </>
//     )
//   }
// }

export default Form;