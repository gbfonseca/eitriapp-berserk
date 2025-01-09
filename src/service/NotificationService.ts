export default class NotificationService {
  static async getNotifications() {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      console.log(registration);
      registration.showNotification("Bem-vindo ao Eitri-App Berserk", {
        icon: "https://release.eitri.calindra.com.br/favicon.svg",
        badge: "https://release.eitri.calindra.com.br/favicon.svg",
        silent: false,
        body: ` O misterioso Guts, o "Espadachim Negro", carrega em sua mão mecânica
        uma enorme espada, e em seu pescoço uma estranha marca que atrai
        forças demoníacas. Em sua busca por vingança contra um antigo inimigo,
        nem tudo sai a seu favor, e ele recebe ajuda de uma fantástica
        criatura.`,
      });
    }
  }

  static async requestPermission() {
    const result = await Notification.requestPermission();
    console.log("Permissão concedida", result);
  }
}
