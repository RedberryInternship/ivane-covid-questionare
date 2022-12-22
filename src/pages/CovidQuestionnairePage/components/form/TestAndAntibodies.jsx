import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';

const TestAndAntibodies = ({ controller: Controller, watch, control }) => {
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor='test-date'
        className='block font-arial text-[1.4rem] font-bold text-dark-100 mt-[2.5rem]'
      >
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*
      </label>

      <Controller
        id='test-date'
        control={control}
        name='test_date'
        render={({ field: { onChange, onBlur } }) => (
          <DatePicker
            placeholderText={'რიცხვი'}
            dateFormat='dd/MM/yyyy'
            className='placeholder-gray-500 placeholder-4 font-arial placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[1.5rem] ml-[1.25rem] border-2 border-border-gray pl-[24px]'
            onChange={onChange}
            onBlur={onBlur}
            selected={watch}
            ref-setter={register('test_date')}
          />
        )}
      />
      <input
        {...register('antibodies_quantity')}
        type='number'
        id='AntibodiesQuantity'
        placeholder='ანტისხეულების რაოდენობა'
        className='placeholder-gray-500 font-arial placeholder-4 placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[1.5rem] ml-[1.25rem] border-2 border-border-gray pl-[24px]'
      />
    </>
  );
};

export default TestAndAntibodies;
