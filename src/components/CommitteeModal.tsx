'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

interface CommitteeModalProps {
  isOpen: boolean;
  onClose: () => void;
  committee: {
    name: string;
    description: string;
    email: string;
    image: string;
  } | null;
}

export default function CommitteeModal({ isOpen, onClose, committee }: CommitteeModalProps) {
  if (!committee) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={committee.image}
                      alt={committee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6 text-gray-900"
                    >
                      {committee.name}
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="text-gray-600">{committee.description}</p>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-500">Contact</h4>
                      <a 
                        href={`mailto:${committee.email}`}
                        className="mt-1 text-[var(--brand)] hover:underline"
                      >
                        {committee.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
