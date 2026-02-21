import sys

content = open('src/components/landing/DeepFeatures.astro').read()

# Restore Section 1
content = content.replace(
    'class="relative group h-[350px] md:h-[500px] w-full max-w-[400px] mockup-stack-container stack-2 transform scale-[0.75] sm:scale-90 md:scale-100 origin-center"',
    'class="relative group h-[550px] lg:h-[500px] w-full max-w-[400px] mockup-stack-container stack-2 transform scale-[0.8] lg:scale-100 origin-top"'
)

# Restore Section 2
content = content.replace(
    'class="relative group h-[350px] md:h-[500px] w-full max-w-[400px] mockup-stack-container stack-2 transform scale-[0.75] sm:scale-90 md:scale-100 origin-center"',
    'class="relative group h-[550px] lg:h-[500px] w-full max-w-[400px] mockup-stack-container stack-2 transform scale-[0.8] lg:scale-100 origin-top"'
)

# Restore Section 3
content = content.replace(
    'class="relative group h-[400px] md:h-[550px] w-full max-w-[450px] mockup-stack-container stack-3 transform scale-[0.75] sm:scale-90 md:scale-100 origin-center"',
    'class="relative group h-[550px] lg:h-[550px] w-full max-w-[450px] mockup-stack-container stack-3 transform scale-[0.8] lg:scale-100 origin-top"'
)

open('src/components/landing/DeepFeatures.astro', 'w').write(content)
