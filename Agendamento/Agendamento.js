<script>

  function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    // Aqui você pode realizar ações com os dados, como enviar para um servidor ou exibir uma mensagem de confirmação
    // Por enquanto, vamos apenas exibir os dados no console
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
    console.log('Data:', date);
    console.log('Horário:', time);
    console.log('Serviço:', service);

    // Limpar os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('service').value = '';
  }

  // Adicionar um ouvinte de evento para o envio do formulário
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
</script>
