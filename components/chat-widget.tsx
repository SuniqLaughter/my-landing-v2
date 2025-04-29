"use client"

import { useEffect, useState } from "react"

export function ChatWidget() {
  const [isMounted, setIsMounted] = useState(false)

  // Проверяем, что компонент монтирован (только на клиенте)
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Инициализируем n8n чат только на клиенте
  useEffect(() => {
    if (!isMounted) return

    // Загружаем стили n8n чата
    const linkId = "n8n-chat-styles"
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link")
      link.id = linkId
      link.rel = "stylesheet"
      link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
      document.head.appendChild(link)
    }

    // Загружаем и инициализируем n8n чат
    const scriptId = "n8n-chat-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.type = "module"
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        
        try {
          createChat({
            webhookUrl: 'https://suniq.app.n8n.cloud/webhook/9b7001d4-dca1-40f9-9045-99520b745d3a/chat',
            customStyles: {
              chatWindow: {
                backgroundColor: '#ffffff',
                textColor: '#1a1a1a',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                border: '1px solid #e5e7eb'
              },
              userMessage: {
                backgroundColor: '#10b981',
                textColor: '#ffffff'
              },
              botMessage: {
                backgroundColor: '#f3f4f6',
                textColor: '#1a1a1a'
              },
              inputField: {
                backgroundColor: '#ffffff',
                textColor: '#1a1a1a',
                placeholderColor: '#9ca3af',
                borderColor: '#e5e7eb'
              },
              sendButton: {
                backgroundColor: '#10b981',
                textColor: '#ffffff',
                hoverBackgroundColor: '#059669'
              },
              header: {
                backgroundColor: '#10b981',
                textColor: '#ffffff'
              },
              chatButton: {
                backgroundColor: '#10b981',
                hoverBackgroundColor: '#059669',
                textColor: '#ffffff'
              }
            }
          });
          console.log('n8n chat initialized');
        } catch (error) {
          console.error('Error initializing n8n chat:', error);
        }
      `
      document.body.appendChild(script)
    }

    return () => {
      // Очистка не требуется, так как мы используем ID для предотвращения дублирования
    }
  }, [isMounted])

  // Компонент не рендерит никакой UI, только инициализирует чат
  return null
}
