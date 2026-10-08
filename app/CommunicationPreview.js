'use client';

import { useEffect, useState } from 'react';

export default function CommunicationPreview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="preview-bar">
      <button type="button" className="preview-btn" onClick={() => setOpen(true)} aria-haspopup="dialog">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Ver comunicación
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <strong id="preview-title">Trigger de activación de Cuotas</strong>
                <span>Así ve el merchant el in-app</span>
              </div>
              <button type="button" className="modal-close" onClick={() => setOpen(false)} aria-label="Cerrar">
                ×
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/previews/cuotas.png"
              alt="Vista previa del in-app “Ofrecé cuotas y vendé tickets más grandes”, con los botones Por ahora no y Activar cuotas."
              className="modal-img"
            />
            <p className="modal-caption">
              Campaña “Trigger por comportamiento – Cuotas”. Aparece en Órdenes y Estadísticas, para merchants con Pago Nube activo y sin credit_card activa.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
