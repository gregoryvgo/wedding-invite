export interface EventData {
  couple: {
    groom: string;
    bride: string;
    hashtag: string;
  };
  eventDate: string; // ISO format για το countdown
  formattedDate: string;
  locations: {
    ceremony: {
      title: string;
      time: string;
      name: string;
      address: string;
      mapQuery: string;
      embedUrl: string;
    };
    reception: {
      title: string;
      time: string;
      name: string;
      address: string;
      mapQuery: string;
      embedUrl: string;
    };
  };
  story: {
    title: string;
    text: string;
  };
  crew: Array<{
    name: string;
    role: string;
    quote: string;
    phone: string;
    image: string;
  }>;
  bankAccount: {
    bankName: string;
    iban: string;
    beneficiary: string;
  };
  rsvpDeadline: string;
}

export const eventData: EventData = {
  couple: {
    groom: "Γιώργος",
    bride: "Δήμητρα",
    hashtag: "#GiorgosDimitra2028",
  },
  eventDate: "2028-09-28T19:00:00",
  formattedDate: "28 Σεπτεμβρίου 2028",
  locations: {
    ceremony: {
      title: "Το Μυστήριο",
      time: "19:00",
      name: "Ι.Ν. Αγίας Μαρίνας",
      address: "Εκάλη, Αττική",
      mapQuery: "https://maps.google.com/?q=Agia+Marina+Ekali",
      embedUrl: "https://maps.google.com/maps?q=Athens&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    reception: {
      title: "Η Δεξίωση",
      time: "21:00",
      name: "Κτήμα Όναρ",
      address: "Κορωπί, Αττική",
      mapQuery: "https://maps.google.com/?q=Ktima+Onar",
      embedUrl: "https://maps.google.com/maps?q=Athens&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  },
  story: {
    title: "Πώς γνωριστήκαμε",
    text: "Όλα ξεκίνησαν σαν μια τυχαία σύμπτωση σε μια πόλη που δεν ησυχάζει ποτέ. Δύο παράλληλες διαδρομές που, χωρίς να το γνωρίζουν, βάδιζαν προς το ίδιο σημείο συνάντησης. Μια ματιά, ένα αυθόρμητο χαμόγελο και μια πρώτη συζήτηση που έμοιαζε να μην έχει τέλος ήταν αρκετά για να αλλάξουν τα πάντα. Από εκείνη τη στιγμή, η καθημερινότητα απέκτησε άλλο νόημα. Τα βράδια γέμισαν με ατελείωτες βόλτες, τα ταξίδια έγιναν κοινές εμπειρίες και οι μικρές, απλές στιγμές μετατράπηκαν στις πιο όμορφες αναμνήσεις. Μέσα από τα γέλια, τα όνειρα, αλλά και τις προκλήσεις, ανακαλύψαμε ότι το σπίτι μας δεν είναι ένας τόπος, αλλά ο ένας δίπλα στον άλλον. Σήμερα, με την ίδια βαθιά αγάπη και την υπόσχεση να μοιραζόμαστε κάθε επόμενη σελίδα, επιλέγουμε να ενώσουμε τις ζωές μας για πάντα, ξεκινώντας το πιο όμορφο κοινό μας κεφάλαιο.",
  },
  crew: [
    {
      name: "Γιώργος",
      role: "Γαμπρός",
      quote: "Ελπίζω να μην περιμένω πολύ τη νύφη!",
      phone: "+306937000000",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
    },
    {
      name: "Δήμητρα",
      role: "Νύφη",
      quote: "Εάν το σκάσω και δεν εμφανιστώ, θα με βρείτε στα παρακάτω στοιχεία!",
      phone: "+306937111200",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop&q=80",
    },
    {
      name: "Ιωάννα",
      role: "Κουμπάρα",
      quote: "Καθόμασταν στο ίδιο θρανίο και φανταζόμασταν αυτή τη στιγμή!",
      phone: "+306937007007",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80",
    },
    {
      name: "Στάθης",
      role: "Κουμπάρος",
      quote: "Επιτέλους θα σε ξυρίσω φίλε, δεν θα μείνει τρίχα!",
      phone: "+306937008008",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80",
    },
  ],
  bankAccount: {
    bankName: "Τράπεζα Πειραιώς",
    iban: "GR00022211155522223333333664512",
    beneficiary: "Γιώργος & Δήμητρα",
  },
  rsvpDeadline: "10 Ιουλίου 2028",
};