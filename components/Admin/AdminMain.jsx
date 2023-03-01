import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Loading from '../Common/Loading';


const AdminMain = () => {


    const [form, setForm] = useState({ content: '' });
    const [savedData, setSavedData] = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        //console.log(e);
        //console.log(e.target[0].name, e.target[0].value);
        //console.log(e.target, typeof (e.target));
        // e.target.map((singleItem) => {
        //     console.log(singleItem.name, singleItem.value);
        // })
        let newObject = {};
        Object.keys(e.target).map(function (keyName, keyIndex) {
            //console.log(keyName, keyIndex);
            console.log(e.target[keyName].value, " => ", e.target[keyName].name);
            if (e.target[keyName].value !== undefined && e.target[keyName].name !== undefined && e.target[keyName].value.length > 0) {
                newObject[e.target[keyName].name] = e.target[keyName].value;
            }
        })

        //console.log("NEW OBJECT: ", newObject);

        createOrUpdatePost(newObject);
    }

    const getPost = async () => {
        // ...implement create logic
        setLoading(true);

        const id = "homePageText";
        const data = {
            id: id,
        };
        //console.log(data);
        try {
            fetch('./api/getDBData', {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
                .then(response => response.json())
                .then((data) => {
                    //console.log("DATA => ", data[0][0].content);
                    setSavedData(JSON.parse(data && data[0][0].content));
                    setLoading(false);
                }
                )
                .catch((err) => {
                    console.log(err)
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getPost();
        //console.log(savedData);
    }, [setSavedData]);

    const createOrUpdatePost = async (content) => {
        // ...implement create logic

        setLoading(true);

        const id = "homePageText";
        const data = {
            id: id,
            content: content
        };
        //console.log(data);
        try {
            fetch('./api/postDBData', {
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then((data) => {
                console.log(data);
                // refreshData();
                //window.location.reload();
                setSavedData(content);
                setLoading(false);
            }
            )
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const refreshData = () => {
        router.replace(router.asPath)
    }

    return (
        <div className='container mx-auto p-5 w-full h-100'>

            {
                loading ?
                    <div className='flex justify-center items-center mt-20 h-100'>
                        <Loading />
                    </div>
                    :
                    <div>
                        <form className='w-full mb-16' onSubmit={(e) => handleSubmitForm(e)}>

                            {Object.keys(savedData).map(function (keyName, keyIndex) {
                                return (
                                    <div name={keyIndex}>
                                        <h3 className='mt-4'>{keyName}</h3>
                                        <textarea
                                            name={keyName}
                                            defaultValue={savedData[keyName]}
                                            className='w-full mt-0 bg-gray-800 rounded-md border-gray-700 border-2 p-5 resize-y font-sans text-base text-white box-border'
                                        />

                                    </div>

                                )
                            })}

                            <button
                                className='text-gray-900 bg-white px-8 py-3 text-lg rounded border-2 border-solid border-white hover:bg-gray-900 hover:text-white duration-200'
                                type='submit'
                            >
                                Update
                            </button>
                        </form>
                    </div>
            }


        </div>
    )
}
export default AdminMain;