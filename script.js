document.addEventListener("DOMContentLoaded", () => {
    const symptomItems = document.querySelectorAll('.symptom-item');

    symptomItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.id;
            const symptomName = itemName.replace(/-/g, ' ');

            // Exemplo de ação "incrível" (mudança de cor)
            item.style.backgroundColor = '#EF476F'; // Cor laranja escuro

            // Exibindo informações
            alert(`Você clicou em ${symptomName}. Aqui estão mais informações sobre ${symptomName}.`);
        });
    });
});
