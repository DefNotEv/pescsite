'use client';

import Image from 'next/image';
import { Member } from '@/data/members';
import { getImagePath } from '@/utils/images';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={getImagePath(member.image)}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="eager"
          onError={(e) => {
            // Fallback in case the image fails to load
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/placeholder-member.jpg'; // Make sure to add a placeholder image
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role} {member.role !== 'Member' ? `• ${member.committee}` : ''}</p>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-500">{member.major}</p>
          <p className="text-xs text-gray-500">{member.year}</p>
        </div>
      </div>
    </div>
  );
}
