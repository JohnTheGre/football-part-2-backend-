import data from "../db.json" with { type: "json" };

// Get all clubs
export async function getAllClubs(req, res) {
  try {
    res.status(200).json(data["premier league"]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clubs", error });
  }
};

// Get one club by name
export async function getClubByName(req, res) {
  try {
    const { name } = req.params;
    const club = data["premier league"].find(
      (club) => club.name.toLowerCase() === name.toLowerCase()
    );

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.status(200).json(club);
  } catch (error) {
    res.status(500).json({ message: "Error fetching club", error });
  }
};

// Get players of a specific club
export async function getClubPlayers(req, res) {
  try {
    const { name } = req.params;
    const club = data["premier league"].find(
      (club) => club.name.toLowerCase() === name.toLowerCase()
    );

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    res.status(200).json(club.Players);
  } catch (error) {
    res.status(500).json({ message: "Error fetching players", error });
  }
};

// Get player by name
export function getPlayerByName(req, res) {
  try {
    const { clubName, playerName } = req.params;

    const club = data["premier league"].find(
      (club) => club.name.toLowerCase() === clubName.toLowerCase()
    );

    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    const player = club.Players.find(
      (p) => p.name.toLowerCase() === playerName.toLowerCase()
    );

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: "Error fetching player", error });
  }
}

