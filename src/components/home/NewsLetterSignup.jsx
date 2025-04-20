// NewsletterSignup.jsx
export default function NewsletterSignup() {
	return (
		<section className='mb-20 px-4 lg:px-[10.2rem]'>
			<div className="py-12 bg-white text-center">
			    <h2 className='text-xl md:text-2xl font-semibold mb-6'>
    				Be the first to know when new <br /> cars land in Lagos
    			</h2>
    			<form className='max-w-md mx-auto space-y-4'>
    				<input
    					type='text'
    					placeholder='Full name'
    					className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
    				/>
    				<input
    					type='email'
    					placeholder='Email address'
    					className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
    				/>
    				<button
    					type='submit'
    					className='w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary/80 transition'>
    					Join Our Email List
    				</button>
    			</form>
			</div>
		</section>
	);
}
