// Concept Data
const conceptsData = {
    1: {
        title: "Urban Loft Cafe",
        description: "This concept reimagines an industrial warehouse space as a modern cafe, featuring soaring ceilings, exposed brick walls, and raw concrete finishes. The design emphasizes vertical space and natural light through large industrial windows, creating an open and airy atmosphere that celebrates the building's architectural heritage.",
        features: [
            "Double-height ceilings with exposed steel beams",
            "Reclaimed brick walls with original patina",
            "Large industrial windows for natural lighting",
            "Polished concrete flooring",
            "Mix of communal and intimate seating areas",
            "Suspended Edison bulb lighting fixtures"
        ],
        materials: "Primary materials include exposed brick, poured concrete, weathered steel, reclaimed wood for furniture, and black metal frameworks. Large glass panels maintain the industrial aesthetic while allowing abundant natural light.",
        aiInfo: "Generated using free AI image synthesis with prompts focused on urban industrial aesthetics, high ceilings, natural lighting, and authentic materials. Images created instantly using Pollinations.ai API for immediate web display."
    },
    2: {
        title: "Minimalist Industrial Cafe",
        description: "A refined take on industrial design, this concept strips away excess while maintaining industrial character. Clean lines, neutral tones, and strategic lighting create a sophisticated space that feels both modern and timeless. The design focuses on essential elements, with each piece serving both functional and aesthetic purposes.",
        features: [
            "Clean geometric forms and simple lines",
            "Monochromatic color palette with warm accents",
            "Minimal decorative elements",
            "Strategic task and ambient lighting",
            "Streamlined furniture with industrial details",
            "Open sightlines and spacious layout"
        ],
        materials: "Polished concrete, matte black steel, white-washed brick, light oak wood accents, and simple glass partitions. Materials are used sparingly but intentionally to create visual interest through texture and form.",
        aiInfo: "Created using AI with emphasis on minimalist principles, negative space, and industrial authenticity. Prompts specified clean compositions, reduced color palettes, and functional elegance using free Pollinations.ai technology."
    },
    3: {
        title: "Vintage Industrial Cafe",
        description: "Blending nostalgia with industrial design, this concept incorporates vintage elements and warm materials to create a welcoming, character-rich space. Antique machinery, aged leather, and warm lighting evoke early 20th-century factory aesthetics while maintaining modern comfort and functionality.",
        features: [
            "Vintage industrial machinery as decorative elements",
            "Warm Edison bulb and pendant lighting",
            "Distressed leather seating with brass details",
            "Exposed brick with aged appearance",
            "Reclaimed wood surfaces and shelving",
            "Antique factory windows and doors"
        ],
        materials: "Aged brick, distressed leather, oxidized copper and brass fixtures, reclaimed barn wood, vintage industrial metal, and aged concrete with warm patina. Rich textures create depth and historical character.",
        aiInfo: "Generated with AI focusing on vintage industrial aesthetics from the 1920s-1950s era. Prompts emphasized warm tones, aged materials, historical authenticity, and nostalgic ambiance using free AI generation services."
    },
    4: {
        title: "Modern Factory Cafe",
        description: "A contemporary interpretation of industrial design that embraces sleek surfaces, cutting-edge materials, and technological integration. This concept merges factory aesthetics with modern sophistication, featuring clean lines, metallic finishes, and state-of-the-art lighting that creates a dynamic, forward-thinking atmosphere.",
        features: [
            "Sleek metal surfaces and glass partitions",
            "LED accent lighting with programmable colors",
            "Contemporary furniture with industrial influences",
            "Polished concrete with metallic aggregates",
            "Modern coffee bar with visible equipment",
            "Technology-integrated ordering systems"
        ],
        materials: "Brushed stainless steel, tempered glass, polished concrete with metallic finish, black aluminum framework, and contemporary composite materials. The palette emphasizes reflective surfaces and modern manufacturing techniques.",
        aiInfo: "Created using AI with prompts emphasizing contemporary design, technological integration, and modern manufacturing aesthetics. Generated instantly with free Pollinations.ai API for seamless web integration and display."
    }
};

// DOM Elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalFeaturesList = document.getElementById('modal-features-list');
const modalMaterialsText = document.getElementById('modal-materials-text');
const modalAiText = document.getElementById('modal-ai-text');
const modalClose = document.querySelector('.modal-close');
const viewButtons = document.querySelectorAll('.view-button');

// Open Modal Function
function openModal(conceptId) {
    const concept = conceptsData[conceptId];
    
    if (!concept) return;
    
    // Update modal content
    const imageUrl = `https://image.pollinations.ai/prompt/${getConceptPrompt(conceptId)}?width=1024&height=640&nologo=true&seed=${conceptId}00${conceptId}`;
    modalImage.src = imageUrl;
    modalImage.alt = concept.title;
    modalTitle.textContent = concept.title;
    modalDescription.textContent = concept.description;
    
    // Clear and populate features list
    modalFeaturesList.innerHTML = '';
    concept.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeaturesList.appendChild(li);
    });
    
    // Update materials and AI info
    modalMaterialsText.textContent = concept.materials;
    modalAiText.textContent = concept.aiInfo;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Helper function to get concept-specific prompts for image URLs
function getConceptPrompt(conceptId) {
    const prompts = {
        1: 'modern industrial cafe interior with high ceilings exposed brick walls large warehouse windows natural light edison bulbs reclaimed wood tables metal chairs concrete floor plants urban loft aesthetic photorealistic architectural photography',
        2: 'minimalist industrial cafe interior clean lines monochromatic palette polished concrete floor white brick black steel simple furniture spacious negative space modern photorealistic architectural photography',
        3: 'vintage industrial cafe interior 1920s 1950s aged brick antique machinery distressed leather seating reclaimed wood warm edison lighting brass copper nostalgic atmosphere photorealistic architectural photography',
        4: 'contemporary modern industrial cafe sleek stainless steel glass partitions polished concrete metallic finish LED lighting high-tech coffee equipment futuristic industrial aesthetic photorealistic architectural photography'
    };
    return encodeURIComponent(prompts[conceptId] || prompts[1]);
}

// Close Modal Function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const conceptId = e.target.dataset.concept;
        openModal(conceptId);
    });
});

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery cards
document.querySelectorAll('.concept-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Image loading placeholder fallback
document.querySelectorAll('.concept-image').forEach((img, index) => {
    img.addEventListener('error', function() {
        console.log('Image failed to load, using gradient placeholder');
        // Create a placeholder with gradient
        this.style.background = `linear-gradient(135deg, 
            ${index % 2 === 0 ? '#2d2d2d' : '#1a1a1a'} 0%, 
            ${index % 2 === 0 ? '#1a1a1a' : '#2d2d2d'} 100%)`;
        this.style.minHeight = '400px';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = 'Loading AI-generated design concept...';
    });
    
    // Show loading state
    img.style.opacity = '0';
    img.addEventListener('load', function() {
        this.style.transition = 'opacity 0.5s ease';
        this.style.opacity = '1';
    });
});

console.log('Industrial Cafe Portfolio initialized with AI-generated images');

// ===================================
// AI Generation Feature with Google Gemini
// ===================================

// Preset prompts for quick generation
const presetPrompts = {
    'cafe': 'A modern stylish cafe interior with comfortable seating, espresso bar, ambient lighting, plants, and warm atmosphere. Photorealistic interior design, high quality, professional photography.',
    'office': 'A contemporary modern office space with open layout, collaborative areas, natural lighting, modern furniture, and inspiring design. Photorealistic interior design, high quality, professional.',
    'restaurant': 'An elegant restaurant interior with fine dining setup, atmospheric lighting, sophisticated decor, tables with place settings, and upscale ambiance. Photorealistic interior design, professional.',
    'retail': 'A modern retail shop interior with attractive product displays, modern fixtures, good lighting, welcoming design, and professional layout. Photorealistic interior design, high quality.',
    'gallery': 'A contemporary art gallery space with white walls, professional lighting, displayed artwork, open floor plan, and sophisticated ambiance. Photorealistic interior design, professional.'
};

// DOM Elements for AI Generator
const geminiKeyInput = document.getElementById('gemini-key');
const promptInput = document.getElementById('prompt-input');
const presetButtons = document.querySelectorAll('.preset-btn');
const generateBtn = document.getElementById('generate-btn');
const btnText = generateBtn.querySelector('.btn-text');
const btnLoader = generateBtn.querySelector('.btn-loader');
const successMessage = document.getElementById('success-message');
const previewPlaceholder = document.getElementById('preview-placeholder');
const generatedImage = document.getElementById('generated-image');
const previewActions = document.getElementById('preview-actions');
const downloadBtn = document.getElementById('download-btn');
const regenerateBtn = document.getElementById('regenerate-btn');

let currentPrompt = '';
let currentImageUrl = '';

// Load saved Gemini key from localStorage
if (localStorage.getItem('gemini_api_key')) {
    geminiKeyInput.value = localStorage.getItem('gemini_api_key');
}

// Save Gemini key to localStorage on change
geminiKeyInput.addEventListener('change', () => {
    if (geminiKeyInput.value.trim()) {
        localStorage.setItem('gemini_api_key', geminiKeyInput.value.trim());
    }
});

// Build full prompt from selections
// Enhance prompt using Google Gemini API
async function enhancePromptWithGemini(userPrompt) {
    const apiKey = geminiKeyInput.value.trim();
    
    // If no API key, use prompt as-is
    if (!apiKey) {
        console.log('No Gemini API key provided, using original prompt');
        return userPrompt;
    }
    
    try {
        console.log('Enhancing prompt with Gemini...');
        
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are an expert interior design prompt writer. Enhance this design description to be more vivid and detailed for AI image generation. Make it specific about materials, colors, lighting, mood, and architectural details. Keep it under 150 words. Here's the description: "${userPrompt}". Return ONLY the enhanced prompt, nothing else.`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 256,
                }
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            console.error('Gemini API error:', error);
            showSuccess('⚠️ Gemini unavailable, using your prompt directly');
            return userPrompt;
        }
        
        const data = await response.json();
        const enhancedPrompt = data.candidates[0].content.parts[0].text;
        
        console.log('Enhanced prompt:', enhancedPrompt);
        showSuccess('✨ Prompt enhanced by Gemini! Generating image...');
        
        return enhancedPrompt;
        
    } catch (error) {
        console.error('Error enhancing prompt:', error);
        showSuccess('⚠️ Using your original prompt');
        return userPrompt;
    }
}

// Show success message
function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

// Show error message
function showError(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    successMessage.style.background = 'rgba(220, 53, 69, 0.1)';
    successMessage.style.borderLeft = '4px solid #dc3545';
    successMessage.style.color = '#ff6b6b';
    setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.style.background = '';
        successMessage.style.borderLeft = '';
        successMessage.style.color = '';
    }, 5000);
}

// Generate image using Hugging Face API (fast & free) with Gemini-enhanced prompt
async function generateImage() {
    // Validation - check if prompt is entered
    const promptText = promptInput.value.trim();
    
    if (!promptText) {
        showError('❌ Please enter a description or select a preset');
        return;
    }
    
    // Show loading state
    generateBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'flex';
    generatedImage.style.display = 'none';
    previewPlaceholder.style.display = 'flex';
    previewActions.style.display = 'none';
    
    try {
        console.log('Starting image generation process...');
        
        // Step 1: Enhance prompt with Gemini if available
        let finalPrompt = promptText;
        
        if (geminiKeyInput.value.trim()) {
            console.log('Enhancing with Gemini...');
            finalPrompt = await enhancePromptWithGemini(promptText);
            showSuccess('🚀 Generating image with enhanced prompt...');
        } else {
            showSuccess('🚀 Generating image...');
        }
        
        // Add quality enhancement if not present
        if (!finalPrompt.toLowerCase().includes('photorealistic')) {
            finalPrompt += ', photorealistic, high quality, professional photography, 8k';
        }
        
        currentPrompt = finalPrompt;
        
        console.log('Final prompt:', finalPrompt);
        
        // Step 2: Generate image using Hugging Face API (free & fast)
        const seed = Math.floor(Math.random() * 1000000);
        
        // Use Hugging Face Inference API with FLUX.1-schnell (fastest free model)
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?width=1024&height=768&seed=${seed}&nologo=true`;
        
        currentImageUrl = imageUrl;
        
        console.log('Image URL:', imageUrl);
        
        // Load the image
        const img = new Image();
        
        img.onload = () => {
            console.log('Image loaded successfully');
            generatedImage.src = imageUrl;
            generatedImage.style.display = 'block';
            previewPlaceholder.style.display = 'none';
            previewActions.style.display = 'flex';
            showSuccess('✅ Image generated successfully with Gemini!');
            
            // Reset button state
            generateBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        };
        
        img.onerror = () => {
            console.error('Image failed to load');
            throw new Error('Failed to load generated image');
        };
        
        // Set a timeout in case image takes too long
        setTimeout(() => {
            if (img.complete && img.naturalHeight === 0) {
                throw new Error('Image generation timeout');
            }
        }, 30000);
        
        img.src = imageUrl;
        
    } catch (error) {
        console.error('Error generating image:', error);
        showError('⚠️ Failed to generate image. Please try again.');
        
        // Reset preview
        generatedImage.style.display = 'none';
        previewPlaceholder.style.display = 'flex';
        previewActions.style.display = 'none';
        
        // Reset button state
        generateBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
}

// Download generated image
async function downloadImage() {
    if (!currentImageUrl) return;
    
    try {
        // Fetch the image
        const response = await fetch(currentImageUrl);
        const blob = await response.blob();
        
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cafe-concept-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        
        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        showSuccess('✅ Image downloaded!');
    } catch (error) {
        console.error('Error downloading image:', error);
        showError('Failed to download image. Please try right-click > Save Image As');
    }
}

// Copy prompt to clipboard
async function copyPrompt() {
    if (!currentPrompt) {
        currentPrompt = buildPrompt();
    }
    
    try {
        await navigator.clipboard.writeText(currentPrompt);
        showSuccess('✅ Prompt copied to clipboard!');
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = currentPrompt;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showSuccess('✅ Prompt copied to clipboard!');
        } catch (err) {
            showError('Failed to copy prompt');
        }
        document.body.removeChild(textArea);
    }
}

// Open Bing Image Creator
function openBingCreator() {
    const prompt = buildPrompt();
    const bingUrl = `https://www.bing.com/images/create?q=${encodeURIComponent(prompt)}`;
    window.open(bingUrl, '_blank');
}

// Event Listeners for AI Generator
generateBtn.addEventListener('click', generateImage);
regenerateBtn.addEventListener('click', generateImage);
downloadBtn.addEventListener('click', downloadImage);

// Save API keys to localStorage when changed
geminiKeyInput.addEventListener('change', () => {
    localStorage.setItem('gemini_api_key', geminiKeyInput.value);
    console.log('Gemini key saved');
});

// Load API keys from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedGeminiKey = localStorage.getItem('gemini_api_key');
    
    if (savedGeminiKey) {
        geminiKeyInput.value = savedGeminiKey;
        console.log('Gemini key loaded from storage');
    }
});

// Preset buttons handler
presetButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const preset = e.target.dataset.preset;
        const presetText = presetPrompts[preset];
        promptInput.value = presetText;
        promptInput.focus();
        showSuccess(`✅ Preset loaded! Ready to generate.`);
    });
});
