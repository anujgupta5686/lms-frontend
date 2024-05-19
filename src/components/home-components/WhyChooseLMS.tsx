import React from 'react';
import learning from '../../assets/learning-s.png';
import flexible from '../../assets/flexible-work.png';
import access from '../../assets/access-to-renowned.png';
import weekend from '../../assets/weekend-live.jpg';
import business from '../../assets/gifImage.gif';

const WhyChooseLMS: React.FC = () => {
    return (
        <div className="w-10/12 mx-auto py-10">
            <h1 className="text-center text-3xl font-bold text-slate-700 uppercase mt-16">
                Why Choose LMS
            </h1>
            <div className="grid md:grid-cols-2 mt-10">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src={learning} alt="Diverse Learning Resources" className="h-24 w-24 object-contain" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-slate-900">Diverse Learning Resources</p>
                            <p className="text-md text-slate-700">Access to diverse educational resources for holistic learning.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src={flexible} alt="Flexible Work-Study Balance" className="h-24 w-24 object-contain" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-slate-900">Flexible Work-Study Balance</p>
                            <p className="text-md text-slate-700">Effective management of work and study commitments via flexible learning.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src={access} alt="Weekend Live Lectures" className="h-24 w-24 object-contain" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-slate-900">Weekend Live Lectures</p>
                            <p className="text-md text-slate-700">Masterclasses and webinars for real-world industry insights.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src={weekend} alt="Access to Renowned Faculty" className="h-24 w-24 object-contain" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-slate-900">Access to Renowned Faculty</p>
                            <p className="text-md text-slate-700">Expert instructors for guidance and mentorship.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={business} alt="Responsive Learning" className="h-full w-full object-contain max-h-96" />
                </div>
            </div>
        </div>
    );
}

export default WhyChooseLMS;
