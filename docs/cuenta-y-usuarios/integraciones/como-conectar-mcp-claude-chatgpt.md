---
title: Cómo conectar el MCP del CRM a Claude o ChatGPT
sidebar_position: 2
description: Guía paso a paso para conectar el servidor MCP de FunnelizaLab CRM con Claude y ChatGPT.
---

## El problema
Quieres consultar y gestionar la información de tu CRM directamente desde tu asistente de inteligencia artificial (**Claude** o **ChatGPT**) usando lenguaje natural mediante el conector **MCP**.

## Solución

Para ambos asistentes utilizarás la siguiente **URL oficial del MCP**:

```text
https://services.leadconnectorhq.com/mcp/anthropic/v2
```

### En Claude

1. **Inicia la conexión**: Entra en **Settings → Connectors → Add custom connector**.
2. **Introduce la URL oficial del MCP**: Pega la URL `https://services.leadconnectorhq.com/mcp/anthropic/v2`.
3. **Autoriza desde LeadConnector**: El sistema abrirá el inicio de sesión de **LeadConnector**. Ingresa tus credenciales, selecciona tu subcuenta y aprueba los permisos.
4. **Verifica la conexión**: En Claude, solicita por ejemplo: *«Muéstrame los últimos cinco contactos registrados en mi CRM»*.

### En ChatGPT

1. Abre [ChatGPT en el navegador](https://chatgpt.com).
2. Entra a **Configuración → Plugins**.
3. Pulsa **+ → Add custom MCP server**.
4. Asigna el nombre **FunnelizaLab CRM**.
5. Pega la URL oficial del MCP (`https://services.leadconnectorhq.com/mcp/anthropic/v2`).
6. Configura la autenticación **OAuth** y acepta la advertencia de seguridad.
7. Autoriza la conexión iniciando sesión en **LeadConnector** y seleccionando tu subcuenta.
8. Crea la integración y selecciónala en una conversación de ChatGPT.

<video controls preload="metadata" style={{width: '100%'}}>
  <source src="https://files.leadconnectorhq.com/file/6af37cca1c208a123b4ad76b/conctar-mcp.mp4" type="video/mp4" />
  Tu navegador no soporta el video incrustado.
</video>
