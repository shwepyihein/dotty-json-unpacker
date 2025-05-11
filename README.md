# JSON to Dot Notation Converter for next-international

A specialized tool designed to convert nested JSON objects into dot notation format, optimized for use with the `next-international` localization library. Visit the live version at [JSON to Dot Notation Converter](https://jsontodotnotation.vercel.app/).

## Why Use This with next-international?

`next-international` uses dot notation for accessing translations, making this converter the perfect companion tool. It helps you:

1. Convert nested translation files into the format `next-international` expects
2. Maintain type safety with TypeScript
3. Simplify the process of creating and managing translations

## Live Demo

Try the converter online: [https://jsontodotnotation.vercel.app/](https://jsontodotnotation.vercel.app/)

## next-international Examples

### 1. Basic Translation Structure

**Input (TypeScript with as const):**

```typescript
export default {
  common: {
    welcome: 'Welcome to our app',
    loading: 'Loading...',
    error: 'An error occurred',
  },
  auth: {
    login: {
      title: 'Sign In',
      email: 'Email Address',
      password: 'Password',
      submit: 'Log In',
    },
    register: {
      title: 'Create Account',
      email: 'Email Address',
      password: 'Password',
      submit: 'Sign Up',
    },
  },
} as const;
```

**Output (Dot Notation for next-international):**

```typescript
{
  "common.welcome": `Welcome to our app`,
  "common.loading": `Loading...`,
  "common.error": `An error occurred`,
  "auth.login.title": `Sign In`,
  "auth.login.email": `Email Address`,
  "auth.login.password": `Password`,
  "auth.login.submit": `Log In`,
  "auth.register.title": `Create Account`,
  "auth.register.email": `Email Address`,
  "auth.register.password": `Password`,
  "auth.register.submit": `Sign Up`
}
```

### 2. Multi-language Support

**Input (TypeScript with as const):**

```typescript
export default {
  en: {
    common: {
      welcome: 'Welcome to our app',
      loading: 'Loading...',
      error: 'An error occurred',
    },
    auth: {
      login: {
        title: 'Sign In',
        email: 'Email Address',
        password: 'Password',
      },
    },
  },
  es: {
    common: {
      welcome: 'Bienvenido a nuestra aplicación',
      loading: 'Cargando...',
      error: 'Ocurrió un error',
    },
    auth: {
      login: {
        title: 'Iniciar sesión',
        email: 'Correo electrónico',
        password: 'Contraseña',
      },
    },
  },
} as const;
```

**Output (Dot Notation for next-international):**

```typescript
{
  "en.common.welcome": `Welcome to our app`,
  "en.common.loading": `Loading...`,
  "en.common.error": `An error occurred`,
  "en.auth.login.title": `Sign In`,
  "en.auth.login.email": `Email Address`,
  "en.auth.login.password": `Password`,
  "es.common.welcome": `Bienvenido a nuestra aplicación`,
  "es.common.loading": `Cargando...`,
  "es.common.error": `Ocurrió un error`,
  "es.auth.login.title": `Iniciar sesión`,
  "es.auth.login.email": `Correo electrónico`,
  "es.auth.login.password": `Contraseña`
}
```

## Usage with next-international

1. **Convert your translations:**

   - Use the converter to transform your nested translation objects
   - Copy the dot notation output

2. **In your Next.js project:**

```typescript
// messages/en.ts
export default {
  'common.welcome': 'Welcome to our app',
  'common.loading': 'Loading...',
  'auth.login.title': 'Sign In',
} as const;

// messages/es.ts
export default {
  'common.welcome': 'Bienvenido a nuestra aplicación',
  'common.loading': 'Cargando...',
  'auth.login.title': 'Iniciar sesión',
} as const;
```

3. **Use in your components:**

```typescript
import { useI18n } from 'next-international';

export default function MyComponent() {
  const t = useI18n();

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <button>{t('auth.login.title')}</button>
    </div>
  );
}
```

## Benefits for next-international Users

1. **Type Safety**: Maintains TypeScript type safety with `as const`
2. **Simpler Access**: Use dot notation to access translations
3. **Better Organization**: Keep your translation files organized
4. **Easy Updates**: Quickly convert new translation structures
5. **Consistent Format**: Ensure all translations follow the same format

## Features

- 🔄 Convert nested JSON to dot notation
- 📝 Support for multiple input formats
- 🎯 TypeScript support with `as const` assertions
- 📋 One-click copy to clipboard
- 🎨 Modern, responsive UI
- ⚡ Instant conversion

## Development

```sh
# Clone the repository
git clone https://github.com/yourusername/dotty-json-unpacker.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contributing

Feel free to submit issues and enhancement requests on our [GitHub repository](https://github.com/yourusername/dotty-json-unpacker)!

## License

This project is open source and available under the MIT License.

## Support

If you find this tool helpful, please consider:

- Starring the repository
- Sharing with your network
- Contributing to the project

Visit [https://jsontodotnotation.vercel.app/](https://jsontodotnotation.vercel.app/) to try it out!
