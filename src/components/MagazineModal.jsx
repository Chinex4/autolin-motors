// components/MagazineModal.jsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';

export default function MagazineModal({ isOpen, onClose }) {
	return (
		<Transition
			appear
			show={isOpen}
			as={Fragment}>
			<Dialog
				as='div'
				className='relative z-50'
				onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-black bg-opacity-40' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto flex items-center justify-center px-4 sm:px-6 lg:px-8'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-90'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-90'>
						<Dialog.Panel className='relative bg-white rounded-2xl p-6 max-w-md w-full shadow-xl transition-all'>
							{/* Close Button */}
							<button
								onClick={onClose}
								className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'>
								<X className='h-6 w-6' />
							</button>

							{/* Cover Image */}
							<img
								src='/magazine.jpg' // Update this path to your actual image path
								alt='Magazine Cover'
								className='w-full h-[300px] rounded-lg mb-4'
							/>

							{/* Modal Content */}
							<Dialog.Title className='text-xl font-semibold text-gray-900 mb-2'>
								Autolin Motors Magazine
							</Dialog.Title>
							<p className='text-gray-700 mb-6'>
								Discover the latest trends in the automotive world, reviews,
								insights, and much more.
							</p>

							<div className='flex justify-end'>
								<a
									href='https://www.canva.com/design/DAGm4Iq-ioY/nGbTUSGyFozDSNuqf5m_ng/edit?utm_content=DAGm4Iq-ioY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition'>
									Read Now
								</a>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
