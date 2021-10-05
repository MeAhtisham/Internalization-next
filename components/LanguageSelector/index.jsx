import React, { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { langs } from '../../api/langs.js';
export default () => {
  const router = useRouter();
  const { locale, locales } = router;
  const [state, setState] = useState('en');
  useEffect(() => {
    console.log(locale);
    setState(locale);
  }, [locale, locales]);
  return (
    <Form.Group className="mb-0">
      <Form.Control
        size="sm"
        as="select"
        value={state}
        onChange={(e) => {
          const { value } = e.target;
          router.push('/', '/', { locale: value });
        }}>
        {langs.map((lang) => (
          <option className="options" value={lang.id} key={lang.id}>
            {lang.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};
