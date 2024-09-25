import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import s from './SearchBar.module.css'

const SearchBar = ({setQuery}) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = (values) => {
      if (values.query.trim() === "") {
      toast.error("Please, enter your request.");
      return;
    }  
        setQuery(values.query)
    };

  return (
      <div>          
          <header className={s.wrapper}>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  
                      <Form className={s.form} >
                    
                          <Field
                        className={s.input}
                              name="query"
                        
                              placeholder="Search images and photos"
                          />
                      <button type="submit" className={s.button}>
                          <CiSearch />
                      </button>
                      </Form>
                  
              </Formik>
  <Toaster />
            </header>
    </div>
  )
}

export default SearchBar
