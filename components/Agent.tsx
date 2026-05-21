'use client'
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

enum CallStatus{
  INACTIVE='INACTIVE',
  CONNECTING='CONNECTING',
  ACTIVE='ACTIVE',
  FINISHED='FINISHED',
}



const Agent = ({userName}:AgentProps) => {

  const isSpeaking = true; // This would be dynamic in a real application
  const callStatus = CallStatus.FINISHED as CallStatus; // This would be dynamic in a real application
  const isCallActive = callStatus === CallStatus.ACTIVE;
  const message =[
    'Whats your name?',
    'My name is John Doe,nice to meet you.',
  ];
  const lastMessage = message[message.length - 1];

  return (
    <>
    <div className='call-view'>
      <div className='card-interviewer'>
        <div className='avatar flex items-center justify-center bg-violet-100 rounded-full p-4'>
          <img src="/ai-avatar.png" alt="Interviewer Avatar" width={65} height={65} className='bg-white border-4 border-white object-cover rounded-full' />
          {isSpeaking && <span className="animate-speak"></span>}
        </div>
        <h3>AI Interviewer</h3>
      </div>
      <div className='card-border'>
        <div className='card-content'>
          <Image src="/user-avatar.png" alt="User Avatar" width={80} height={80} className="rounded-full object-cover" />
          <h3>{userName}</h3>
        </div>
      </div>
    </div>
      {message.length > 0 && (<div className = "transcript-border">
        <div className="transcript">
          <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0','animate-fade-in opacity-100')}>
            {lastMessage}
          </p>
        </div>
      </div>)}

    <div className='w-full flex justify-center'>
      {callStatus !== CallStatus.ACTIVE ? (
        <button className='relative btn-call'>
          <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus != CallStatus.CONNECTING && 'hidden')}/>
          <span>

          {callStatus === CallStatus.INACTIVE ||
           callStatus === CallStatus.FINISHED
           ? 'Call'
           : '. . .'}
           </span>
        </button>
      ) : (<button className="btn-disconnect">
        END
      </button>)}

    </div>
    </>
  )
}

export default Agent
