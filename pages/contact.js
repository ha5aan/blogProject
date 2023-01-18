import React,{useState} from 'react';
import styles from '../styles/Contact.module.css'
 
const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    
    const [desc, setdesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( name, email, desc)
        const data = {  name, email, desc };

        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                alert("Thanks for contacting us");
               
                setname('')
                setdesc('')
                setemail('')
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setemail(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setdesc(e.target.value)
        }
        else if (e.target.name == 'name') {
            setname(e.target.value)
        }
    }



    return <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
   <div className={styles.form}>
   <form onSubmit={handleSubmit}>
            <div className={styles.mb3}>
                <label htmlFor="name" className={styles.formlabel}>Enter your name</label><br/>
                <input type="text" value={name} onChange={handleChange} className={styles.formControl} id="name" name='name' aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
                <label htmlFor="email" className={styles.formlabel}>Email address</label>
                <br/>
                <input type="email" value={email} onChange={handleChange} className={styles.formControl} name='email' id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className={styles.formText}>We`ll never share your email with anyone else.</div>
            </div>
         
            <div className={styles.mb3}>
                <label htmlFor="desc" className={styles.formlabel}>Comments / Concerns </label><br/>
                <textarea value={desc} onChange={handleChange} className={styles.formControl} placeholder="Write your comments/Concerns here" name='desc' rows="10" id="desc" />
            </div>
            <button type="submit" className={styles.btn}>Submit</button>
        </form>
   
        </div>
   </div>;
};
 
export default Contact;