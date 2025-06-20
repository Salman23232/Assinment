const Button = ({ text , icon}: { text: string , icon:React.ReactNode}) => {
  return (
    <button className='flex max-w-48 items-center border border-black dark:text-white dark:border-white pr-2 pt-2 pb-2 rounded-full space-x-2 text-gray-700'>
      <span className=' border border-gray-700 rounded-full p-2'>
        {icon}
      </span>
      <span className='w-full font-medium'>
        {text}
      </span>
    </button>
  );
};

export default Button;
