import { DesignItem } from '../../data';

// UI Patterns
import HeroSectionDemo from './demos/HeroSectionDemo';
import PricingTableDemo from './demos/PricingTableDemo';
import TestimonialsDemo from './demos/TestimonialsDemo';
import AccordionFAQDemo from './demos/AccordionFAQDemo';
import ModalDialogDemo from './demos/ModalDialogDemo';
import CardComponentDemo from './demos/CardComponentDemo';

// Navigation
import StickyNavbarDemo from './demos/StickyNavbarDemo';
import HamburgerMenuDemo from './demos/HamburgerMenuDemo';
import MegaMenuDemo from './demos/MegaMenuDemo';
import DotNavigationDemo from './demos/DotNavigationDemo';
import BreadcrumbsDemo from './demos/BreadcrumbsDemo';
import TabNavigationDemo from './demos/TabNavigationDemo';

// Typography & Color
import TypeScaleDemo from './demos/TypeScaleDemo';
import FontPairingDemo from './demos/FontPairingDemo';
import ColorTheoryDemo from './demos/ColorTheoryDemo';
import GradientTextDemo from './demos/GradientTextDemo';
import DisplayTypographyDemo from './demos/DisplayTypographyDemo';
import ThemeToggleDemo from './demos/ThemeToggleDemo';

// Layouts
import FPatternDemo from './demos/FPatternDemo';
import HeroFeatureGridDemo from './demos/HeroFeatureGridDemo';
import AsymmetricSplitDemo from './demos/AsymmetricSplitDemo';
import MasonryDemo from './demos/MasonryDemo';
import FullPageScrollDemo from './demos/FullPageScrollDemo';
import SidebarContentDemo from './demos/SidebarContentDemo';

// Scroll & Animation
import ParallaxDemo from './demos/ParallaxDemo';
import ScrollTriggeredDemo from './demos/ScrollTriggeredDemo';
import HorizontalScrollDemo from './demos/HorizontalScrollDemo';
import StickySectionsDemo from './demos/StickySectionsDemo';
import TextRevealDemo from './demos/TextRevealDemo';
import ScrollProgressDemo from './demos/ScrollProgressDemo';
import SmoothScrollDemo from './demos/SmoothScrollDemo';

// Design Aesthetics (Redone)
import GlassmorphismDemo from './demos/GlassmorphismDemo';
import NeumorphismDemo from './demos/NeumorphismDemo';
import BrutalismDemo from './demos/BrutalismDemo';
import MinimalismDemo from './demos/MinimalismDemo';
import BentoGridDemo from './demos/BentoGridDemo';
import DarkLuxuryDemo from './demos/DarkLuxuryDemo';
import RetroY2KDemo from './demos/RetroY2KDemo';
import ClaymorphismDemo from './demos/ClaymorphismDemo';

// Micro-interactions
import ButtonFeedbackDemo from './demos/ButtonFeedbackDemo';
import ToggleSwitchDemo from './demos/ToggleSwitchDemo';
import LikeAnimationDemo from './demos/LikeAnimationDemo';
import HoverGlowDemo from './demos/HoverGlowDemo';
import LoadingButtonDemo from './demos/LoadingButtonDemo';

// Loading & Skeletons
import SkeletonCardsDemo from './demos/SkeletonCardsDemo';
import SpinnerLoaderDemo from './demos/SpinnerLoaderDemo';

// Form Design
import OTPInputDemo from './demos/OTPInputDemo';
import MultiStepFormDemo from './demos/MultiStepFormDemo';

// Cursor & Hover
import MagneticButtonDemo from './demos/MagneticButtonDemo';
import TextScrambleDemo from './demos/TextScrambleDemo';

// 3D CSS
import CSSCubeDemo from './demos/CSSCubeDemo';
import CardFlipDemo from './demos/CardFlipDemo';

// Data Visualization
import StatCardsDemo from './demos/StatCardsDemo';

// Mobile UI
import BottomSheetDemo from './demos/BottomSheetDemo';
import MobileTabBarDemo from './demos/MobileTabBarDemo';
import NotificationStackDemo from './demos/NotificationStackDemo';

// Animation Principles
import EasingShowcaseDemo from './demos/EasingShowcaseDemo';
import TransitionStatesDemo from './demos/TransitionStatesDemo';
import StaggerAnimationDemo from './demos/StaggerAnimationDemo';
import SpringPhysicsDemo from './demos/SpringPhysicsDemo';
import OrchestratedSequenceDemo from './demos/OrchestratedSequenceDemo';

// Remaining Demos
import ProgressLoaderDemo from './demos/ProgressLoaderDemo';
import PageTransitionLoaderDemo from './demos/PageTransitionLoaderDemo';
import ShimmerTextDemo from './demos/ShimmerTextDemo';
import FloatingLabelsDemo from './demos/FloatingLabelsDemo';
import InputValidationDemo from './demos/InputValidationDemo';
import SearchInputDemo from './demos/SearchInputDemo';
import CustomCursorDemo from './demos/CustomCursorDemo';
import ImageRevealDemo from './demos/ImageRevealDemo';
import TiltEffectDemo from './demos/TiltEffectDemo';
import PerspectiveTiltDemo from './demos/PerspectiveTiltDemo';
import ThreeDTextDemo from './demos/ThreeDTextDemo';
import DepthLayersDemo from './demos/DepthLayersDemo';
import ProgressRingDemo from './demos/ProgressRingDemo';
import BarChartDemo from './demos/BarChartDemo';
import SparklineDemo from './demos/SparklineDemo';
import SwipeCardsDemo from './demos/SwipeCardsDemo';
import PullToRefreshDemo from './demos/PullToRefreshDemo';

import '../demos.css';
import '../demos2.css';
import '../demos-scroll.css';

interface Props {
  item: DesignItem;
}

export default function DemoRenderer({ item }: Props) {
  switch (item.id) {

    // ── UI Patterns ──────────────────────────────
    case 'hero-section':        return <HeroSectionDemo />;
    case 'pricing-table':       return <PricingTableDemo />;
    case 'testimonials':        return <TestimonialsDemo />;
    case 'accordion-faq':       return <AccordionFAQDemo />;
    case 'modal-dialog':        return <ModalDialogDemo />;
    case 'card-component':      return <CardComponentDemo />;

    // ── Navigation ───────────────────────────────
    case 'sticky-navbar':       return <StickyNavbarDemo />;
    case 'hamburger-menu':      return <HamburgerMenuDemo />;
    case 'mega-menu':           return <MegaMenuDemo />;
    case 'dot-navigation':      return <DotNavigationDemo />;
    case 'breadcrumbs':         return <BreadcrumbsDemo />;
    case 'tab-navigation':      return <TabNavigationDemo />;

    // ── Typography & Color ────────────────────────
    case 'type-scale':          return <TypeScaleDemo />;
    case 'font-pairing':        return <FontPairingDemo />;
    case 'color-theory-60-30-10': return <ColorTheoryDemo />;
    case 'gradient-text':       return <GradientTextDemo />;
    case 'display-typography':  return <DisplayTypographyDemo />;
    case 'theme-toggle':        return <ThemeToggleDemo />;

    // ── Layouts ───────────────────────────────────
    case 'f-pattern':           return <FPatternDemo />;
    case 'hero-feature-grid':   return <HeroFeatureGridDemo />;
    case 'asymmetric-split':    return <AsymmetricSplitDemo />;
    case 'masonry':             return <MasonryDemo />;
    case 'full-page-scroll':    return <FullPageScrollDemo />;
    case 'sidebar-content':     return <SidebarContentDemo />;

    // ── Scroll & Animation ────────────────────────
    case 'parallax':            return <ParallaxDemo />;
    case 'scroll-triggered':    return <ScrollTriggeredDemo />;
    case 'horizontal-scroll':   return <HorizontalScrollDemo />;
    case 'sticky-sections':     return <StickySectionsDemo />;
    case 'text-reveal':         return <TextRevealDemo />;
    case 'scroll-progress':     return <ScrollProgressDemo />;
    case 'lenis-scroll':        return <SmoothScrollDemo />;

    // ── Design Aesthetics (Redone) ─────────────────
    case 'glassmorphism':       return <GlassmorphismDemo />;
    case 'neumorphism':         return <NeumorphismDemo />;
    case 'brutalism':           return <BrutalismDemo />;
    case 'minimalism':          return <MinimalismDemo />;
    case 'bento-grid':          return <BentoGridDemo />;
    case 'dark-luxury':         return <DarkLuxuryDemo />;
    case 'retro-y2k':           return <RetroY2KDemo />;
    case 'claymorphism':        return <ClaymorphismDemo />;

    // ── Micro-interactions ─────────────────────
    case 'button-feedback':        return <ButtonFeedbackDemo />;
    case 'toggle-switch':          return <ToggleSwitchDemo />;
    case 'like-animation':         return <LikeAnimationDemo />;
    case 'hover-glow':             return <HoverGlowDemo />;
    case 'loading-button':         return <LoadingButtonDemo />;

    // ── Loading & Skeletons ────────────────────
    case 'skeleton-cards':         return <SkeletonCardsDemo />;
    case 'spinner-loader':         return <SpinnerLoaderDemo />;
    case 'progress-loader':        return <ProgressLoaderDemo />;
    case 'page-transition-loader': return <PageTransitionLoaderDemo />;
    case 'shimmer-text':           return <ShimmerTextDemo />;

    // ── Form Design ───────────────────────────
    case 'otp-input':              return <OTPInputDemo />;
    case 'multi-step-form':        return <MultiStepFormDemo />;
    case 'floating-labels':        return <FloatingLabelsDemo />;
    case 'input-validation':       return <InputValidationDemo />;
    case 'search-input':           return <SearchInputDemo />;

    // ── Cursor & Hover ─────────────────────────
    case 'magnetic-button':        return <MagneticButtonDemo />;
    case 'text-scramble':          return <TextScrambleDemo />;
    case 'custom-cursor':          return <CustomCursorDemo />;
    case 'image-reveal':           return <ImageRevealDemo />;
    case 'tilt-effect':            return <TiltEffectDemo />;

    // ── 3D CSS ────────────────────────────────
    case 'css-cube':               return <CSSCubeDemo />;
    case 'card-flip':              return <CardFlipDemo />;
    case 'perspective-tilt':       return <PerspectiveTiltDemo />;
    case '3d-text':                return <ThreeDTextDemo />;
    case 'depth-layers':           return <DepthLayersDemo />;

    // ── Data Visualization ─────────────────────
    case 'stat-cards':             return <StatCardsDemo />;
    case 'number-counter':         return <StatCardsDemo />;
    case 'progress-ring':          return <ProgressRingDemo />;
    case 'bar-chart':              return <BarChartDemo />;
    case 'sparkline':              return <SparklineDemo />;

    // ── Mobile UI ─────────────────────────────
    case 'bottom-sheet':           return <BottomSheetDemo />;
    case 'mobile-tab-bar':         return <MobileTabBarDemo />;
    case 'notification-stack':     return <NotificationStackDemo />;
    case 'swipe-cards':            return <SwipeCardsDemo />;
    case 'pull-refresh':           return <PullToRefreshDemo />;

    // ── Animation Principles ───────────────────
    case 'easing-showcase':        return <EasingShowcaseDemo />;
    case 'transition-states':      return <TransitionStatesDemo />;
    case 'stagger-animation':      return <StaggerAnimationDemo />;
    case 'spring-physics':         return <SpringPhysicsDemo />;
    case 'orchestrated-sequence':  return <OrchestratedSequenceDemo />;

    default:
      return (
        <div className="hero-image-container generic-placeholder">
          <span className="generic-placeholder-icon">{item.icon}</span>
          <p className="generic-placeholder-text">Live demo coming soon</p>
        </div>
      );
  }
}
