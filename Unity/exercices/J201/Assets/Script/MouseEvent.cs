using UnityEngine;
using UnityEngine.InputSystem;
using TMPro;

public class Clicker : MonoBehaviour
{
    private GameObject player;
    private Camera playerCamera;
    private TextMeshProUGUI scoreText;
    
    // Deux AudioSource séparés
    private AudioSource gunAudioSource;
    private AudioSource explosionAudioSource;
    
    [Header("Audio Clips")]
    public AudioClip gun;
    public AudioClip explosion;
    
    private int score = 0;

    void Start()
    {
        playerCamera = GameObject.Find("CameraPlayer").GetComponent<Camera>();
        scoreText = GameObject.Find("ScoreText").GetComponent<TextMeshProUGUI>();
        
        AudioSource[] audioSources = GetComponents<AudioSource>();
        
        if (audioSources.Length >= 2)
        {
            gunAudioSource = audioSources[0];      
            explosionAudioSource = audioSources[1]; 
            
            Debug.Log("Gun AudioSource: " + gunAudioSource);
            Debug.Log("Explosion AudioSource: " + explosionAudioSource);
        }
        else
        {
            Debug.LogError("Il faut au moins 2 AudioSource sur ce GameObject !");
        }
    }
    
    void Update()
    {
        Mouse mouse = Mouse.current;
        if (mouse != null && mouse.leftButton.wasPressedThisFrame)
        { 
            Ray ray = playerCamera.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0)); 
            
            if (gunAudioSource != null && gun != null)
            {
                gunAudioSource.PlayOneShot(gun);
            }
            
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                if (hit.collider.CompareTag("cible"))
                {
                    if (explosionAudioSource != null && explosion != null)
                    {
                        explosionAudioSource.PlayOneShot(explosion);
                    }
                    
                    AddScore();
                    Destroy(hit.collider.gameObject);
                }
            }
        }
    }

    void AddScore()
    {
        score += 1;
        scoreText.text = "Score: " + score.ToString();
    }
}