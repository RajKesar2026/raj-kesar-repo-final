

## Plan: Remove IP-Based Location Routing

Strip out the `ipapi.co` geolocation call and simplify the WhatsApp hook to always use the default Hyderabad number.

### Changes

**1. `src/hooks/useWhatsApp.tsx`**
- Remove the `BANGALORE_NUMBER` constant
- Remove the `useEffect` that calls `ipapi.co/json/`
- Remove the `useState` for number — just use `DEFAULT_NUMBER` directly in `getWhatsAppUrl`
- Keep the context/provider/hook structure intact (other components depend on it)

### No other files need changes
All consumers (`Hero`, `Products`, `FinalCTA`, `FloatingWhatsApp`, `PreOrderPopup`) already use `getWhatsAppUrl()` from the hook — they'll keep working as-is.

