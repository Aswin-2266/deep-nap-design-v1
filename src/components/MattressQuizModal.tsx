import React, { useState } from 'react';
import { QUIZ_QUESTIONS, MATTRESS_MODELS } from '../data/mattresses';
import { MattressModel } from '../types';

interface MattressQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMattress: (mattressName: string) => void;
}

export const MattressQuizModal: React.FC<MattressQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectMattress
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [quizComplete, setQuizComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (qId: string, optIndex: number) => {
    const updated = { ...answers, [qId]: optIndex };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizComplete(true);
    }
  };

  // Calculate recommended mattress based on answers
  const getRecommendation = (): {
    model: MattressModel;
    firmness: number;
    headline: string;
    rationale: string;
  } => {
    const position = answers['sleepPosition'] ?? 1;
    const pain = answers['bodySupport'] ?? 0;
    const partner = answers['partnerDisturbance'] ?? 0;
    const feel = answers['firmnessPreference'] ?? 1;

    // Firmness logic
    let targetFirmness = 7;
    if (feel === 0) targetFirmness = 4;
    else if (feel === 2) targetFirmness = 8;
    else targetFirmness = position === 0 ? 6 : position === 2 ? 8 : 7;

    if (pain === 0) targetFirmness = Math.max(targetFirmness, 7); // lower back stiffness needs firm/ortho

    let matched = MATTRESS_MODELS[0];
    if (targetFirmness <= 4) {
      matched = MATTRESS_MODELS.find(m => m.id === 'plush-cloud-latex-quilt') || MATTRESS_MODELS[0];
    } else if (targetFirmness >= 8) {
      matched = MATTRESS_MODELS.find(m => m.id === 'rubberised-coir-spine-care') || MATTRESS_MODELS[3];
    } else if (partner === 0) {
      matched = MATTRESS_MODELS.find(m => m.id === 'latex-pocket-spring') || MATTRESS_MODELS[0];
    } else {
      matched = MATTRESS_MODELS.find(m => m.id === 'natural-latex-ortho') || MATTRESS_MODELS[1];
    }

    return {
      model: matched,
      firmness: targetFirmness,
      headline: `Calibrated Firmness: ${targetFirmness}/10 · ${matched.firmnessLabel}`,
      rationale: `Based on your sleep pattern (${QUIZ_QUESTIONS[0].options[position]?.label}) and support needs (${QUIZ_QUESTIONS[1].options[pain]?.label}), this configuration balances pressure relief on vulnerable joints with steady horizontal spine alignment.`
    };
  };

  const recommendation = quizComplete ? getRecommendation() : null;

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setQuizComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#DFD8CC] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#EFE5D7] px-6 py-4 border-b border-[#DFD8CC] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#DCA544] uppercase tracking-wider">
              Diagnostic Sleep Assessment
            </span>
            <h3 className="font-headline text-[20px] font-bold text-[#142C47]">
              {quizComplete ? "Your Recommended Specification" : `Question ${currentStep + 1} of ${QUIZ_QUESTIONS.length}`}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#142C47] hover:bg-black/10 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Progress bar */}
        {!quizComplete && (
          <div className="w-full bg-[#DFD8CC] h-1.5">
            <div
              className="bg-[#142C47] h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {!quizComplete ? (
            <div className="space-y-6">
              <h4 className="font-headline text-[22px] font-bold text-[#142C47] leading-snug">
                {currentQ.question}
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentQ.id] === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(currentQ.id, idx)}
                      className={`w-full text-left p-4 rounded-xl border text-[15px] transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#142C47] bg-[#EFE5D7]/50 ring-2 ring-[#142C47]/20'
                          : 'border-[#DFD8CC] bg-white hover:border-[#142C47] hover:bg-[#f7f3ec]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="font-bold text-[#142C47]">
                          {opt.label}
                        </div>
                        <div className="text-[13px] text-[#5E6B7A]">
                          {opt.detail}
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border border-[#DFD8CC] mt-1 flex items-center justify-center">
                        {isSelected && <span className="w-3 h-3 rounded-full bg-[#142C47]"></span>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-[#5E6B7A] hover:text-[#142C47] font-semibold underline"
                  >
                    ← Back to previous question
                  </button>
                </div>
              )}
            </div>
          ) : recommendation && (
            <div className="space-y-6">
              {/* Recommendation Card */}
              <div className="bg-[#f7f3ec] p-6 rounded-xl border border-[#DFD8CC] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DFD8CC] pb-3">
                  <div>
                    <span className="text-xs font-bold text-[#DCA544] uppercase tracking-wider">
                      Optimal Match
                    </span>
                    <h4 className="font-headline text-[22px] font-bold text-[#142C47]">
                      {recommendation.model.name}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#142C47] text-white text-xs font-bold self-start sm:self-center">
                    {recommendation.headline}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <img
                    src={recommendation.model.imageUrl}
                    alt={recommendation.model.name}
                    className="w-full sm:w-44 h-32 rounded-lg object-cover border border-[#DFD8CC]"
                  />
                  <div className="space-y-2 text-sm text-[#1A2230]">
                    <p className="leading-relaxed text-[#43474d]">
                      {recommendation.rationale}
                    </p>
                    <div className="pt-1 flex flex-wrap gap-2 text-xs">
                      <span className="bg-white px-2.5 py-1 rounded border border-[#DFD8CC] font-semibold text-[#142C47]">
                        Internal Core: {recommendation.model.internalCore}
                      </span>
                      <span className="bg-white px-2.5 py-1 rounded border border-[#DFD8CC] font-semibold text-[#142C47]">
                        Warranty: {recommendation.model.warrantyYears} Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectMattress(recommendation.model.name);
                    onClose();
                  }}
                  className="flex-1 h-12 bg-[#142C47] text-white font-semibold rounded-lg hover:bg-[#0E1F33] transition-colors cursor-pointer text-sm shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Request Quote for {recommendation.model.name}</span>
                  <span>→</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="h-12 px-5 border border-[#DFD8CC] text-[#5E6B7A] hover:text-[#142C47] font-semibold rounded-lg hover:bg-[#f7f3ec] transition-colors text-sm"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
