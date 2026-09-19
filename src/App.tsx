/**
 * Deep Nap Mattress - Bespoke Sleep Systems Made to Order in Coimbatore, Tamil Nadu
 * Built with artisanal integrity and modern industrial precision.
 */

import React, { useState, useEffect } from 'react';
import { ScreenView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { SupportSection } from './components/SupportSection';
import { CustomSizeBand } from './components/CustomSizeBand';
import { TheRange } from './components/TheRange';
import { SleepConsultation } from './components/SleepConsultation';
import { ReviewsSection } from './components/ReviewsSection';
import { BulkSection } from './components/BulkSection';
import { InclusionsBand } from './components/InclusionsBand';
import { VisitUsSection } from './components/VisitUsSection';
import { FloatingChat } from './components/FloatingChat';
import { MattressQuizModal } from './components/MattressQuizModal';
import { QuoteModal } from './components/QuoteModal';

// Specialized screens
import { MattressCollectionScreen } from './components/screens/MattressCollectionScreen';
import { DiwanCotsScreen } from './components/screens/DiwanCotsScreen';
import { CustomSizeScreen } from './components/screens/CustomSizeScreen';
import { BulkOrdersScreen } from './components/screens/BulkOrdersScreen';
import { VisitUnitScreen } from './components/screens/VisitUnitScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('home');
  const [lang, setLang] = useState<'en' | 'ta'>('en');

  // Modals state
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  const [quoteOpen, setQuoteOpen] = useState<boolean>(false);
  const [selectedMattressForQuote, setSelectedMattressForQuote] = useState<string | undefined>(undefined);
  const [initialDimsForQuote, setInitialDimsForQuote] = useState<{
    length: number;
    width: number;
    thickness: number;
    estimatedPrice?: number;
  } | undefined>(undefined);

  // Active filter pass-through when user clicks from support cards
  const [activeCatalogFilter, setActiveCatalogFilter] = useState<string>('all');

  // Smooth scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleOpenQuote = (mattressName?: string) => {
    setSelectedMattressForQuote(mattressName);
    setInitialDimsForQuote(undefined);
    setQuoteOpen(true);
  };

  const handleOpenCustomQuote = (dims: {
    length: number;
    width: number;
    thickness: number;
    estimatedPrice: number;
  }) => {
    setSelectedMattressForQuote(`Custom Size (${dims.length}×${dims.width}×${dims.thickness} in)`);
    setInitialDimsForQuote(dims);
    setQuoteOpen(true);
  };

  const handleOpenQuoteWithDims = (data: {
    length: number;
    width: number;
    thickness: number;
    model: string;
  }) => {
    setSelectedMattressForQuote(data.model);
    setInitialDimsForQuote({
      length: data.length,
      width: data.width,
      thickness: data.thickness
    });
    setQuoteOpen(true);
  };

  const handleFilterAndNavigate = (category: string) => {
    setActiveCatalogFilter(category);
    setCurrentScreen('mattress-collection');
  };

  return (
    <div className="min-h-screen bg-[#fdf9f2] text-[#1A2230] font-body flex flex-col selection:bg-[#F3E3C2] selection:text-[#142C47]">
      {/* Sticky Header with Announcement Bar and Navigation */}
      <Header
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        onOpenQuote={() => handleOpenQuote()}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Area - padded for fixed header */}
      <main className="flex-1 pt-20 lg:pt-[116px]">
        {currentScreen === 'home' && (
          <>
            {/* Section 1: Hero with live Firmness Scale */}
            <Hero
              onOpenQuote={handleOpenQuote}
              onNavigate={setCurrentScreen}
              onSelectFirmness={() => {}}
            />

            {/* Section 2: Trust Strip */}
            <TrustStrip />

            {/* Section 3: Find the right support & Quiz Trigger */}
            <SupportSection
              onOpenQuiz={() => setQuizOpen(true)}
              onNavigate={setCurrentScreen}
              onFilterCategory={handleFilterAndNavigate}
            />

            {/* Section 4: Tell us the size. We build it. (Custom Size Band) */}
            <CustomSizeBand onOpenCustomQuote={handleOpenCustomQuote} />

            {/* Section 5: The Range (13 mattress formulations) */}
            <TheRange
              onOpenQuote={handleOpenQuote}
              onNavigate={setCurrentScreen}
              activeFilter={activeCatalogFilter}
            />

            {/* Section 6: Built around how you actually sleep (Consultation) */}
            <SleepConsultation onOpenConsultation={() => handleOpenQuote('Sleep Consultation')} />

            {/* Section 7: Google Reviews */}
            <ReviewsSection />

            {/* Section 8: Bulk and Institutional B2B Supply */}
            <BulkSection
              onNavigate={setCurrentScreen}
              onOpenBulkQuote={() => handleOpenQuote('Bulk Institutional Order')}
            />

            {/* Section 9: What's Included Band */}
            <InclusionsBand />

            {/* Section 10: Visit Us (Chinniyampalayam Experience Center) */}
            <VisitUsSection
              onNavigate={setCurrentScreen}
              onBookVisit={() => setCurrentScreen('visit-our-unit')}
            />
          </>
        )}

        {currentScreen === 'mattress-collection' && (
          <MattressCollectionScreen
            onOpenQuote={handleOpenQuote}
            onOpenQuiz={() => setQuizOpen(true)}
            defaultFilter={activeCatalogFilter}
          />
        )}

        {currentScreen === 'diwan-cots' && (
          <DiwanCotsScreen onOpenQuote={handleOpenQuote} />
        )}

        {currentScreen === 'custom-size-builder' && (
          <CustomSizeScreen onOpenQuoteWithDims={handleOpenQuoteWithDims} />
        )}

        {currentScreen === 'bulk-institutional-orders' && (
          <BulkOrdersScreen onOpenQuote={handleOpenQuote} />
        )}

        {currentScreen === 'visit-our-unit' && (
          <VisitUnitScreen />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentScreen}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Chat with Mattress Maker */}
      <FloatingChat onOpenQuote={handleOpenQuote} />

      {/* Interactive Sleep Diagnostic Quiz Modal */}
      <MattressQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectMattress={(mattressName) => {
          handleOpenQuote(mattressName);
        }}
      />

      {/* Consultative Quote Request Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultMattress={selectedMattressForQuote}
        initialDims={initialDimsForQuote}
      />
    </div>
  );
}
