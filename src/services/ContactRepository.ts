import { ContactForm } from '../types';

/**
 * Contact Repository - Encapsulates contact form API calls
 * Following Repository pattern for clean separation of concerns
 */
export class ContactRepository {
    private baseUrl: string;

    constructor(baseUrl: string = '/api') {
        this.baseUrl = baseUrl;
    }

    /**
     * Submit contact form
     */
    async submitContactForm(
        formData: ContactForm
    ): Promise<{ success: boolean; message: string }> {
        const response = await fetch(`${this.baseUrl}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Failed to submit contact form: ${response.statusText}`);
        }

        return response.json();
    }

    /**
     * Validate email format
     */
    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validate contact form
     */
    validateContactForm(formData: ContactForm): {
        isValid: boolean;
        errors: Record<string, string>;
    } {
        const errors: Record<string, string> = {};

        if (!formData.name.trim()) {
            errors.name = 'Nome é obrigatório';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Nome deve ter pelo menos 2 caracteres';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email é obrigatório';
        } else if (!this.validateEmail(formData.email)) {
            errors.email = 'Email inválido';
        }

        if (!formData.message.trim()) {
            errors.message = 'Mensagem é obrigatória';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    }
}
