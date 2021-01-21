import spinner from './spinner.gif';

const Loader = () => {
    return (
        <div className='loader'>
            <img src={spinner} alt='Loading' className='loader__gif'/>
            <h1 className='loader__text'>Fetching Data...</h1>
        </div>
    )
}

export default Loader;
