const container = document.querySelector('.container');
const loginlink = document.querySelector('.SignInLink');
const registerlink = document.querySelector('.SignUpLink');

registerlink.addEventListener('click', () => {
    container.classList.add('active');
});

loginlink.addEventListener('click', () => {
    container.classList.remove('active');
});
function openDonateModal(amount) {
  document.getElementById("donateModal").style.display = "flex";

  document.getElementById("donationText").innerText =
    `You are donating $${amount}. Choose a payment method below.`;

  // Ghana Mobile Money via WhatsApp instructions
  const momoNumber = "+233 53 061 9888"; // 🔴 replace with your MoMo number
  const momoMessage = `Hello, I want to donate $${amount} via Ghana Mobile Money.`;

  document.getElementById("momoLink").href =
    `https://wa.me/${momoNumber}?text=${encodeURIComponent(momoMessage)}`;

  // Bank payment instructions
  document.getElementById("bankLink").onclick = function () {
    alert(
      "BANK PAYMENT DETAILS\n\n" +
      "Bank Name: Republic bank\n" +
      "Account Name: Sam Michael\n" +
      "Account Number:0191024794301 \n" +
      "Branch: Accra\n\n" +
      "After payment, please contact us for confirmation."
    );
  };
}

function closeDonateModal() {
  document.getElementById("donateModal").style.display = "none";
}


